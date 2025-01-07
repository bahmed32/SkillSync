# SkillSync

SkillSync is a full-stack Retrieval-Augmented Generation (RAG) application that leverages modern web technologies to provide accurate and context-aware answers to user queries.

# Features
Frontend: Built with React for an intuitive and interactive user experience.
Backend: Powered by Python (Flask), integrating Supabase for data storage and retrieval, and Hugging Face APIs for natural language processing.
Pipeline: Implements a robust system to process user queries, retrieve relevant context, and generate responses using large language models.
API Integration: Ensures seamless communication between components for efficient data flow.


Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/skillsync.git
cd skillsync
Install frontend dependencies:

bash
Copy code
cd frontend
npm install
Install backend dependencies:

bash
Copy code
cd backend
pip install -r requirements.txt
Usage
Start the backend server:

bash
Copy code
cd backend
python app.py
Start the frontend server:

bash
Copy code
cd frontend
npm start
Open your browser and navigate to http://localhost:3000.

API Endpoints
GET /get_answer
Processes a query and returns a generated response.
Example: http://localhost:5000/get_answer?query=your-question
Technologies Used
Frontend: ReactJS
Backend: Python (Flask)
Database: Supabase
NLP Model: Hugging Face API
License
This project is licensed under the MIT License. See the LICENSE file for details.
