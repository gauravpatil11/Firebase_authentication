import React from "react";
import { Card , Button , Alert} from "react-bootstrap";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function Dashboard() {
    
    const [error, setError] = useState("")
    const {currentUser , logout} = useAuth()
    const history = useHistory()

    async function handleLogOut(){
        setError('')
        try{
            await logout()
            history.push('/login')
        }catch{
            setError("Failed to Log out")
        }
    }
  return (
    <>
      <Card>
        <Card.Body>
        <h2 className="text-center mb-4">Profile</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <strong> Email : </strong> {currentUser.email}
        <Link to="/update-profile" className="btn btn-info w-100 mt-3">Update Profile</Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogOut}>
            Log Out
        </Button>
      </div>
    </>
  );
}
