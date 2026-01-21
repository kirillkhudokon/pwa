import 'bootstrap/dist/css/bootstrap.css'

const adviceBox = document.querySelector('.advice-box');
const advices = [
  'Start with Purpose: Begin your day knowing why you`re doing something, connecting your actions to your deeper values.','Build an Energizing Routine: Create a morning ritual that includes movement, healthy food, or reading to set a positive tone.','Set Small, Achievable Goals: Break big tasks into tiny, manageable steps to build momentum and reduce overwhelm.','Celebrate Small Wins: Acknowledge and reward yourself for progress, even minor achievements, to keep spirits high.','Visualize Success: Picture the benefits of achieving your goals to strengthen your desire to act.','Create a Positive Environment: Curate your surroundings and social media to include supportive people and uplifting content.','Take Regular Breaks: Schedule short rests to avoid burnout and recharge your mind and body.','Learn from Setbacks (Don`t Aim for Perfection): Accept that motivation fluctuates; focus on consistent action and self-compassion rather than perfection.','Practice Gratitude: Regularly reflect on what you`re thankful for to foster a positive mindset.','End with Reflection: Take a few minutes at the end of the day to review your progress and plan for tomorrow.'
]

if(adviceBox){
  const advice = advices[Math.floor(Math.random() * advices.length)];
  adviceBox.innerHTML = `<div class="alert alert-success">${advice}</div>`
}

if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/sw.js')
    .then(regisration => console.log('reg', regisration.scope))
    .catch(e => console.log('no worker', e))
}