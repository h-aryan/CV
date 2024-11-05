const generalInfoData = {
  Name: "John Doe",
  Mobile: "1234 12345",
  Email: "this-is-not-real-email@yahoo.com",
  location: "Random Street California Road",
};

const educationalExperience = [
  {
    College: "Unreal University",
    Branch: "BSe Computer Science",
    year: "2119-2123",
    Id: crypto.randomUUID(),
  },
];

const practicalExperience = [
  {
    key: crypto.randomUUID(),
    companyName: "Impossible Company",
    positionTitle: "Software Engineer",
    date: "Jun 2118 - Present",
  },
  {
    key: crypto.randomUUID(),
    companyName: "Unreal House Ltd.",
    positionTitle: "IT Support Officer",
    date: "Oct 2113 - Jun 2118",
  },
];

export { generalInfoData, educationalExperience, practicalExperience };
