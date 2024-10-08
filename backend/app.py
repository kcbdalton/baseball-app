from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from dotenv import load_dotenv
import os
from blueprints import routes, fitness_routes, llm_routes
load_dotenv()

# 
SECRET_KEY = os.getenv("SECRET_KEY")

app = Flask(__name__)

# Configure the database URI
# Replace the connection string with one for your database.
# app.config['SQLALCHEMY_DATABASE_URI'] = f'mysql+pymysql://{DB_USER}:{DB_PASS}@localhost:{DB_PORT}/{DB_NAME}'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# .\venv\Scripts\python -c "import os; print(os.urandom(24).hex())"
app.config['SECRET_KEY'] = SECRET_KEY

cors = CORS(app, resources={r'*': {'origins': '*'}})
jwt = JWTManager(app)

app.register_blueprint(routes.routes, name='routes')
app.register_blueprint(llm_routes.llm_routes, name='llm_routes')
app.register_blueprint(fitness_routes.fitness_routes, name="fitnessRoutes")


@app.route('/notify', methods=['POST'])
def notify():
	data = request.json
	print(data['message'])
	return '', 204

if __name__ == '__main__':

	app.run(debug=True, host="localhost", port=5000)
