export type Recipe = null | {
    title: string;
    description: string;
    date: string;
    prep_time: string;
    cook_time: string;
    total_time: string;
    servings: string;
    author: string;
    ingredients: string[];
    instructions: string[];
    notes: string[];
};
