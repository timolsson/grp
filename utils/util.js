export const getRefactoredJSON = (json) => {
  let refactoredJSON = [...json].map((initiative) => {
    let mainAreas = [];

    MAIN_AREAS_OF_WORK.forEach((area, i) => {
      if (initiative[area.raw] === "1") {
        mainAreas.push(area.name);
      }
    });

    return { ...initiative, mainAreas: mainAreas };
  });
  return refactoredJSON;
};

export const MAIN_AREAS_OF_WORK = [
  { raw: "policy_planning", name: "Policy & Planning" },
  { raw: "knowledge_learning", name: "Knowledge & Learning" },
  { raw: "finance_budgets", name: "Finance & Budget" },
  { raw: "practice_innovation", name: "Practice & Innovation" },
];
