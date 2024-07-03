class BioDataRobot {
    constructor() {
        this.bio_data = {};
    }

    set_name(name) {
        this.bio_data.name = name;
    }

    set_birthplace(birthplace) {
        this.bio_data.birthplace = birthplace;
    }

    set_birthdate(birthdate) {
        this.bio_data.birthdate = birthdate;
    }

    set_family_position(position) {
        this.bio_data.family_position = position;
    }

    set_education_history(history) {
        this.bio_data.education_history = history;
    }

    set_professional_goal(goal) {
        this.bio_data.professional_goal = goal;
    }

    set_interests(interests) {
        this.bio_data.interests = interests;
    }

    answer_question(question) {
        question = question.toLowerCase();
        if (question.includes('name')) {
            return `My name is ${this.bio_data.name || 'not provided'}.`;
        } else if (question.includes('birthplace')) {
            return `I was born in ${this.bio_data.birthplace || 'not provided'}.`;
        } else if (question.includes('birthdate') || question.includes('birthday')) {
            return `My birthdate is ${this.bio_data.birthdate || 'not provided'}.`;
        } else if (question.includes('family position') || question.includes('family')) {
            return `I am ${this.bio_data.family_position || 'not provided'} in my family.`;
        } else if (question.includes('education')) {
            return `My education history includes: ${this.bio_data.education_history || 'not provided'}.`;
        } else if (question.includes('goal')) {
            return `My professional goal is ${this.bio_data.professional_goal || 'not provided'}.`;
        } else if (question.includes('interest')) {
            return `My interests are ${this.bio_data.interests || 'not provided'}.`;
        } else {
            return "I'm not sure how to answer that question.";
        }
    }
}

const robot = new BioDataRobot();

function submitForm() {
    const name = document.getElementById('name').value;
    const birthplace = document.getElementById('birthplace').value;
    const birthdate = document.getElementById('birthdate').value;
    const family_position = document.getElementById('family_position').value;
    const education_history = document.getElementById('education_history').value;
    const professional_goal = document.getElementById('professional_goal').value;
    const interests = document.getElementById('interests').value;

    robot.set_name(name);
    robot.set_birthplace(birthplace);
    robot.set_birthdate(birthdate);
    robot.set_family_position(family_position);
    robot.set_education_history(education_history);
    robot.set_professional_goal(professional_goal);
    robot.set_interests(interests);

    const responseDiv = document.getElementById('response');
    responseDiv.innerHTML = `
        <p>${robot.answer_question('What is your name?')}</p>
        <p>${robot.answer_question('Where were you born?')}</p>
        <p>${robot.answer_question('What is your birthdate?')}</p>
        <p>${robot.answer_question('What is your family position?')}</p>
        <p>${robot.answer_question('Tell me about your education.')}</p>
        <p>${robot.answer_question('What is your professional goal?')}</p>
        <p>${robot.answer_question('What are your interests?')}</p>
    `;
}
