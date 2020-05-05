const getRefactoredJSON = (json) => {
  let refactoredJSON = [...json].map((initiative) => {
    const areas = [
      "policy_planning",
      "knowledge_learning",
      "finance_budgets",
      "practice_innovation",
    ];
    const areasName = [
      "Policy Planning",
      "Knowledge Learning",
      "Finance Budgets",
      "Practice Innovation",
    ];

    let mainAreas = [];

    areas.forEach((area, i) => {
      if (initiative[area] === "1") {
        mainAreas.push(areasName[i]);
      }
      delete initiative[area];
    });

    return { ...initiative, mainAreas: mainAreas };
  });
  return refactoredJSON;
};

export default getRefactoredJSON;
