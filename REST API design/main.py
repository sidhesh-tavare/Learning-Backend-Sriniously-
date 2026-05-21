import uuid
from datetime import datetime
from typing import Optional
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

organizations_db = []

class OrganizationCreate(BaseModel):
    name: str
    status: str
    description: Optional[str] = None

@app.get("/organisations")
def get_all_organizations(
    limit: Optional[int] = 2, 
    sortBy: Optional[str] = None, 
    sortOrder: Optional[str] = "asc",
    filterStatus: Optional[str] = None
):
    # 1. Start with a copy of your full database list
    working_list = list(organizations_db)
    
    # 2. Apply filtering first if a status is passed
    if filterStatus:
        working_list = [org for org in working_list if org.get("status") == filterStatus]
    
    # 3. Apply sorting on the filtered list
    if sortBy:
        valid_keys = ["name", "status", "id", "createdAt"]
        if sortBy in valid_keys:
            reverse_flag = True if sortOrder == "desc" else False
            working_list.sort(key=lambda x: str(x.get(sortBy, "")), reverse=reverse_flag)

    # 4. Calculate metrics based on the filtered results
    total_records = len(organizations_db)
    filtered_records_count = len(working_list)
    
    safe_limit = filtered_records_count if limit is None or limit < 0 else limit
    limited_data = working_list[:safe_limit]
    
    return {
        "total_records_in_db": total_records,
        "records_matching_filter": filtered_records_count,
        "limit_applied": safe_limit,
        "sortBy_applied": sortBy,
        "sortOrder_applied": sortOrder,
        "filterStatus_applied": filterStatus,
        "data": limited_data
    }

@app.post("/organisations",status_code=201)
def create_organization(org: OrganizationCreate):

    new_org = {
        "id": str(uuid.uuid4())[:8], # Generates a short, unique string id
        "createdAt": datetime.utcnow().isoformat() + "Z", # ISO timestamp
        "name": org.name,
        "status": org.status,
        "description": org.description
    }
    
    organizations_db.append(new_org)
    
    return new_org