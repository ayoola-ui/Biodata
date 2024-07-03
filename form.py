class BioDataRobot:
    def __init__(self):
        self.bio_data = {}

    def set_name(self, name):
        self.bio_data['name'] = name

    def set_birthplace(self, birthplace):
        self.bio_data['birthplace'] = birthplace

    def set_birthdate(self, birthdate):
        self.bio_data['birthdate'] = birthdate

    def set_family_position(self, position):
        self.bio_data['family_position'] = position

    def set_education_history(self, history):
        self.bio_data['education_history'] = history

    def set_professional_goal(self, goal):
        self.bio_data['professional_goal'] = goal

    def set_interests(self, interests):
        self.bio_data['interests'] = interests

    def get_bio_data(self):
        return self.bio_data

    def answer_question(self, question):
        question = question.lower()
        if 'name' in question:
            return f"My name is {self.bio_data.get('name', 'not provided')}."
        elif 'birthplace' in question:
            return f"I was born in {self.bio_data.get('birthplace', 'not provided')}."
        elif 'birthdate' in question or 'birthday' in question:
            return f"My birthdate is {self.bio_data.get('birthdate', 'not provided')}."
        elif 'family position' in question or 'family' in question:
            return f"I am {self.bio_data.get('family_position', 'not provided')} in my family."
        elif 'education' in question:
            return f"My education history includes: {self.bio_data.get('education_history', 'not provided')}."
        elif 'goal' in question:
            return f"My professional goal is {self.bio_data.get('professional_goal', 'not provided')}."
        elif 'interest' in question:
            return f"My interests are {self.bio_data.get('interests', 'not provided')}."
        else:
            return "I'm not sure how to answer that question."

# Example usage:
robot = BioDataRobot()
robot.set_name("Olatinwo Jamiu")
robot.set_birthplace("Ibadan, Nigeria")
robot.set_birthdate("1995-05-15")
robot.set_family_position("first son")
robot.set_education_history("Started in Ibadan, continued in Lagos, graduated from Kwara State Polytechnic")
robot.set_professional_goal("to become a product designer")
robot.set_interests("UI research, UX design, prototyping")

print(robot.answer_question("What is your name?"))
print(robot.answer_question("Where were you born?"))
print(robot.answer_question("What is your birthdate?"))
print(robot.answer_question("What is your family position?"))
print(robot.answer_question("Tell me about your education."))
print(robot.answer_question("What is your professional goal?"))
print(robot.answer_question("What are your interests?"))
