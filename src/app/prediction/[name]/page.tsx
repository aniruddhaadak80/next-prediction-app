const getPredictedAge = async (name: string) => {
  const res = await fetch(`https://api.agify.io?name=${name}`);
  return res.json();
};

const getPredictedGender = async (name: string) => {
  const res = await fetch(`https://api.genderize.io?name=${name}`);
  return res.json();
};

const getPredictedCountry = async (name: string) => {
  const res = await fetch(`https://api.nationalize.io?name=${name}`);
  return res.json();
};

interface Params {
  params: { name: string };
}

export default async function Prediction({ params }: Params) {
  const ageData = getPredictedAge(params.name);

  const genderData = getPredictedGender(params.name);

  const countryData = getPredictedCountry(params.name);

  const [age, gender, country] = await Promise.all([
    ageData,
    genderData,
    countryData,
  ]);
  return (
    <>
      <h1>Prediction ...</h1>
      <h2>Name : <mark>{params.name}</mark></h2>
      <div>
        <div>
          <div>Persoanal Info :👇👇👇</div>
          <br />
          <div>Age : <mark> {age?.age} </mark> </div>
          <br />
          <div>Gender : <mark>{gender?.gender} </mark> </div>
          <br />
          <div>Country : <mark> {country?.country[0]?.country_id} </mark></div>
          <br />
        </div>
      </div>
    </>
  );
}
