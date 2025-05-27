import requests
import time
import statistics
import sys
from urllib.parse import urljoin

class PerformanceTester:
    def __init__(self, base_url="http://localhost:8082"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.response_times = []

    def run_test(self, name, path, expected_status=200):
        """Run a single performance test"""
        url = urljoin(self.base_url, path)
        self.tests_run += 1
        
        print(f"\n🔍 Testing {name} at {url}...")
        
        try:
            start_time = time.time()
            response = requests.get(url)
            end_time = time.time()
            
            response_time = (end_time - start_time) * 1000  # Convert to milliseconds
            self.response_times.append(response_time)
            
            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}, Response time: {response_time:.2f}ms")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                
            return success, response_time
            
        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, None

    def print_performance_summary(self):
        """Print a summary of performance metrics"""
        if not self.response_times:
            print("\n⚠️ No response times collected")
            return
            
        avg_time = statistics.mean(self.response_times)
        max_time = max(self.response_times)
        min_time = min(self.response_times)
        
        if len(self.response_times) > 1:
            stdev = statistics.stdev(self.response_times)
        else:
            stdev = 0
            
        print("\n📊 Performance Summary:")
        print(f"   Average response time: {avg_time:.2f}ms")
        print(f"   Minimum response time: {min_time:.2f}ms")
        print(f"   Maximum response time: {max_time:.2f}ms")
        print(f"   Standard deviation: {stdev:.2f}ms")
        
        # Performance rating
        if avg_time < 100:
            print("   Performance rating: 🚀 Excellent (< 100ms)")
        elif avg_time < 300:
            print("   Performance rating: ✅ Good (< 300ms)")
        elif avg_time < 1000:
            print("   Performance rating: ⚠️ Fair (< 1000ms)")
        else:
            print("   Performance rating: ❌ Poor (> 1000ms)")

def main():
    # Setup
    tester = PerformanceTester("http://localhost:8082")
    
    # Run tests for main pages
    tester.run_test("Home Page", "/")
    tester.run_test("Projects Page", "/projects.html")
    tester.run_test("Reflection Page", "/reflection.html")
    
    # Run tests for static assets
    tester.run_test("CSS File", "/styles.css")
    tester.run_test("JavaScript File", "/script.js")
    
    # Print results
    print(f"\n📊 Tests passed: {tester.tests_passed}/{tester.tests_run}")
    tester.print_performance_summary()
    
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())