// script.js
async function fetchAndDisplayPlans() {
    try {
        const response = await fetch('/plans');
        const plans = await response.json();

        const plansContainer = document.querySelector('.plans-container');

        plans.forEach(plan => {
            const planElement = document.createElement('div');
            plansContainer.appendChild(planElement);
        });
    } catch (error) {
        console.error('Error fetching plans:', error);
    }
}

fetchAndDisplayPlans();
