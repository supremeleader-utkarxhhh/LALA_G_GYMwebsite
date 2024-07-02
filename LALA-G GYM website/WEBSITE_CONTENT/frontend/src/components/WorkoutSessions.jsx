import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
        Experience our top-rated workout session designed to elevate your fitness journey. Whether you're looking to build strength, increase endurance, or enhance overall wellness, our expert trainers are here to guide you every step of the way.</p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Discover our featured bootcamps designed to help you achieve your fitness goals.
        </p>
        <div className="bootcamps">
          <div>
            <h4>Strength Training Bootcamp</h4>
            <p>
              Join our intensive strength training bootcamp to build muscle, improve
              endurance, and boost overall fitness. Our certified trainers will guide
              you through personalized workouts tailored to your fitness level.
            </p>
          </div>
          <div>
            <h4>Cardio Kickboxing Bootcamp</h4>
            <p>
              Experience the adrenaline rush of our cardio kickboxing bootcamp. Burn
              calories, improve cardiovascular health, and enhance coordination with
              dynamic kickboxing routines led by our expert instructors.
            </p>
          </div>
          <div>
            <h4>Yoga and Meditation Bootcamp</h4>
            <p>
              Rejuvenate your mind and body with our yoga and meditation bootcamp.
              Relax, unwind, and improve flexibility while cultivating inner peace and
              mindfulness. Suitable for all fitness levels.
            </p>
          </div>
          <div>
            <h4>CrossFit Challenge Bootcamp</h4>
            <p>
              Push your limits with our CrossFit challenge bootcamp. Experience
              high-intensity workouts that combine strength training and cardio for
              maximum results. Join our supportive community and achieve peak
              performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
