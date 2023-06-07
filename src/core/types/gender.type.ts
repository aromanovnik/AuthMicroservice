export const genderType = ['male', 'female', ''] as const;
export type GenderType = (typeof genderType)[number];
