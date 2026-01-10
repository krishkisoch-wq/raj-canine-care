#!/usr/bin/env python3
"""
Backend API Testing for Raj Canine Care Website
Tests the contact form submission and retrieval APIs
"""

import requests
import json
import sys
from datetime import datetime
import uuid

# Backend URL from frontend .env
BACKEND_URL = "https://pawsomecare-4.preview.emergentagent.com"
API_BASE = f"{BACKEND_URL}/api"

def test_contact_form_submission():
    """Test POST /api/contact endpoint with valid data"""
    print("\n=== Testing Contact Form Submission (POST /api/contact) ===")
    
    # Test data as specified in the review request
    test_data = {
        "name": "Priya Sharma",
        "phone": "9879771213", 
        "email": "priya.sharma@example.com",
        "pet_type": "dog",
        "message": "I need a grooming appointment for my dog Max. He's a Golden Retriever and needs a full grooming session including bath, nail trimming, and hair cut."
    }
    
    try:
        print(f"Sending POST request to: {API_BASE}/contact")
        print(f"Request data: {json.dumps(test_data, indent=2)}")
        
        response = requests.post(f"{API_BASE}/contact", json=test_data, timeout=30)
        
        print(f"Response Status Code: {response.status_code}")
        print(f"Response Headers: {dict(response.headers)}")
        
        if response.status_code == 200:
            response_data = response.json()
            print(f"Response Data: {json.dumps(response_data, indent=2, default=str)}")
            
            # Validate response structure
            required_fields = ['id', 'name', 'phone', 'email', 'pet_type', 'message', 'created_at', 'status']
            missing_fields = [field for field in required_fields if field not in response_data]
            
            if missing_fields:
                print(f"❌ FAIL: Missing required fields in response: {missing_fields}")
                return False
            
            # Validate data integrity
            if (response_data['name'] == test_data['name'] and 
                response_data['phone'] == test_data['phone'] and
                response_data['email'] == test_data['email'] and
                response_data['pet_type'] == test_data['pet_type'] and
                response_data['message'] == test_data['message']):
                print("✅ PASS: Contact form submission successful with correct data")
                return True
            else:
                print("❌ FAIL: Response data doesn't match submitted data")
                return False
        else:
            print(f"❌ FAIL: HTTP {response.status_code}")
            print(f"Response: {response.text}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ FAIL: Request failed - {str(e)}")
        return False
    except Exception as e:
        print(f"❌ FAIL: Unexpected error - {str(e)}")
        return False

def test_contact_form_validation():
    """Test POST /api/contact with missing required fields"""
    print("\n=== Testing Contact Form Validation ===")
    
    # Test with missing required fields
    test_cases = [
        {"name": "", "phone": "9879771213", "message": "Test message"},  # Missing name
        {"name": "Test User", "phone": "", "message": "Test message"},  # Missing phone
        {"name": "Test User", "phone": "9879771213", "message": ""},   # Missing message
    ]
    
    validation_passed = True
    
    for i, test_data in enumerate(test_cases, 1):
        try:
            print(f"\nTest Case {i}: {test_data}")
            response = requests.post(f"{API_BASE}/contact", json=test_data, timeout=30)
            
            if response.status_code == 422:  # FastAPI validation error
                print(f"✅ PASS: Validation correctly rejected invalid data (HTTP 422)")
            elif response.status_code == 400:  # Bad request
                print(f"✅ PASS: Validation correctly rejected invalid data (HTTP 400)")
            else:
                print(f"❌ FAIL: Expected validation error but got HTTP {response.status_code}")
                print(f"Response: {response.text}")
                validation_passed = False
                
        except Exception as e:
            print(f"❌ FAIL: Error testing validation - {str(e)}")
            validation_passed = False
    
    return validation_passed

def test_contact_form_optional_fields():
    """Test POST /api/contact with missing optional fields"""
    print("\n=== Testing Contact Form with Optional Fields ===")
    
    # Test with missing optional fields (email, pet_type)
    test_data = {
        "name": "Rajesh Kumar",
        "phone": "9904923988",
        "message": "I would like to schedule a vet consultation for my pet."
        # email and pet_type are optional and not provided
    }
    
    try:
        print(f"Sending POST request with minimal required data: {json.dumps(test_data, indent=2)}")
        response = requests.post(f"{API_BASE}/contact", json=test_data, timeout=30)
        
        print(f"Response Status Code: {response.status_code}")
        
        if response.status_code == 200:
            response_data = response.json()
            print(f"Response Data: {json.dumps(response_data, indent=2, default=str)}")
            
            # Check that optional fields are handled correctly (should be empty strings)
            if (response_data.get('email') == "" and 
                response_data.get('pet_type') == ""):
                print("✅ PASS: Optional fields handled correctly (empty strings)")
                return True
            else:
                print(f"❌ FAIL: Optional fields not handled correctly. email: '{response_data.get('email')}', pet_type: '{response_data.get('pet_type')}'")
                return False
        else:
            print(f"❌ FAIL: HTTP {response.status_code}")
            print(f"Response: {response.text}")
            return False
            
    except Exception as e:
        print(f"❌ FAIL: Error testing optional fields - {str(e)}")
        return False

def test_get_contacts():
    """Test GET /api/contacts endpoint"""
    print("\n=== Testing Get Contacts (GET /api/contacts) ===")
    
    try:
        print(f"Sending GET request to: {API_BASE}/contacts")
        response = requests.get(f"{API_BASE}/contacts", timeout=30)
        
        print(f"Response Status Code: {response.status_code}")
        
        if response.status_code == 200:
            contacts = response.json()
            print(f"Number of contacts retrieved: {len(contacts)}")
            
            if len(contacts) > 0:
                print("Sample contact data:")
                print(json.dumps(contacts[0], indent=2, default=str))
                
                # Verify sorting (newest first)
                if len(contacts) > 1:
                    first_date = datetime.fromisoformat(contacts[0]['created_at'].replace('Z', '+00:00'))
                    second_date = datetime.fromisoformat(contacts[1]['created_at'].replace('Z', '+00:00'))
                    
                    if first_date >= second_date:
                        print("✅ PASS: Contacts are sorted by newest first")
                    else:
                        print("❌ FAIL: Contacts are not sorted correctly")
                        return False
                else:
                    print("ℹ️  INFO: Only one contact found, cannot verify sorting")
            else:
                print("ℹ️  INFO: No contacts found in database")
            
            print("✅ PASS: Get contacts endpoint working")
            return True
        else:
            print(f"❌ FAIL: HTTP {response.status_code}")
            print(f"Response: {response.text}")
            return False
            
    except Exception as e:
        print(f"❌ FAIL: Error testing get contacts - {str(e)}")
        return False

def test_api_health():
    """Test basic API connectivity"""
    print("\n=== Testing API Health ===")
    
    try:
        print(f"Testing basic connectivity to: {API_BASE}/")
        response = requests.get(f"{API_BASE}/", timeout=30)
        
        print(f"Response Status Code: {response.status_code}")
        
        if response.status_code == 200:
            print("✅ PASS: API is accessible")
            return True
        else:
            print(f"❌ FAIL: API health check failed - HTTP {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ FAIL: API connectivity failed - {str(e)}")
        return False

def main():
    """Run all backend tests"""
    print("🧪 Starting Raj Canine Care Backend API Tests")
    print(f"Backend URL: {BACKEND_URL}")
    print(f"API Base: {API_BASE}")
    
    test_results = []
    
    # Run all tests
    test_results.append(("API Health Check", test_api_health()))
    test_results.append(("Contact Form Submission", test_contact_form_submission()))
    test_results.append(("Contact Form Optional Fields", test_contact_form_optional_fields()))
    test_results.append(("Contact Form Validation", test_contact_form_validation()))
    test_results.append(("Get Contacts", test_get_contacts()))
    
    # Summary
    print("\n" + "="*60)
    print("🏁 TEST SUMMARY")
    print("="*60)
    
    passed = 0
    failed = 0
    
    for test_name, result in test_results:
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{status}: {test_name}")
        if result:
            passed += 1
        else:
            failed += 1
    
    print(f"\nTotal Tests: {len(test_results)}")
    print(f"Passed: {passed}")
    print(f"Failed: {failed}")
    
    if failed == 0:
        print("\n🎉 All tests passed!")
        return 0
    else:
        print(f"\n⚠️  {failed} test(s) failed!")
        return 1

if __name__ == "__main__":
    sys.exit(main())