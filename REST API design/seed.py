import time
import random
import requests

API_URL = "http://localhost:3112/organisations"

ORG_NAMES = ["Alpha", "Beta", "Zeta", "Apex", "Quantum", "Nexus", "Vertex", "Horizon"]
ORG_TYPES = ["Labs", "Technologies", "Systems", "HQ", "Group", "Global", "Solutions"]
STATUS_OPTIONS = ["active", "archived"]
DESCRIPTIONS = [
    "Enterprise task management workspace.",
    "Internal product delivery team.",
    "Client consulting engineering branch.",
    "Experimental R&D workspace.",
    "Global operations and logistics pipeline."
]

def generate_random_org():
    name = f"{random.choice(ORG_NAMES)} {random.choice(ORG_TYPES)}"
    status = random.choice(STATUS_OPTIONS)
    description = random.choice(DESCRIPTIONS)
    return {"name": name, "status": status, "description": description}

def seed_database(count=10):
    print(f"🚀 Starting to seed {count} random organizations to {API_URL}...\n")
    
    for i in range(1, count + 1):
        payload = generate_random_org()
        
        try:
            response = requests.post(API_URL, json=payload)
            
            if response.status_code == 201:
                data = response.json()
                print(f"✅ [{i}/{count}] Created: {data['name']} (ID: {data['id']}, Status: {data['status']})")
            else:
                print(f"❌ [{i}/{count}] Failed with status code: {response.status_code}")
                
        except requests.exceptions.ConnectionError:
            print("🚨 Error: Could not connect to the server. Make sure your Uvicorn server is running on port 3112!")
            break
            
        time.sleep(0.1)

    print("\n🏁 Seeding process complete.")

if __name__ == "__main__":
    # Change this number to generate more or fewer random organizations
    seed_database(count=10)
    