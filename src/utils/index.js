export default async (animal) => {
  const response = await fetch('https://reqres.in/api/users', {
    method: 'POST',
    body: JSON.stringify(animal),
  });

  const newAnimal = await response.json();

  return { ...animal, ...newAnimal };
};
