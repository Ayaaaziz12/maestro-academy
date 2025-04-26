// src/pages/Testimonials.jsx
const testimonials = [
    {
      name: "Youssef A.",
      feedback:
        "Grâce à ce centre, j’ai intégré l’ENSA après une préparation sérieuse et motivante. Les profs sont top et toujours à l’écoute.",
      level: "Élève en terminale sciences maths",
    },
    {
      name: "Khadija M.",
      feedback:
        "Les séances de soutien m’ont vraiment aidée à comprendre les notions difficiles en maths et physique. Je recommande à 100%.",
      level: "Bachelière – série PC",
    },
    {
      name: "Amine R.",
      feedback:
        "Une excellente préparation pour les concours ! Des formateurs expérimentés, des cours clairs, et une ambiance de travail motivante.",
      level: "Admis à l’ISCAE",
    },
    {
      name: "Salma E.",
      feedback:
        "J’ai pu gagner en confiance pour passer mes oraux de médecine. Merci à toute l’équipe pour votre accompagnement !",
      level: "Bac international",
    },
  ];
  
  const Testimonials = () => {
    return (
      <div className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-600">Ils parlent de nous</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow">
              <p className="text-gray-700 italic">"{t.feedback}"</p>
              <p className="mt-4 font-semibold text-blue-700">{t.name}</p>
              <p className="text-sm text-gray-500">{t.level}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Testimonials;