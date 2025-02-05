// src/lib/types.ts
export interface BaseGuide {
    title: string;
    category: 'skills' | 'quests';
    membersOnly: boolean;
    lastUpdated: string;
    slug: string;
}

export interface SkillGuide extends BaseGuide {
    category: 'skills';
    levelRequirement: number;
}

export interface QuestGuide extends BaseGuide {
    category: 'quests';
    difficulty: 'Novice' | 'Intermediate' | 'Experienced' | 'Master';
    length: 'Short' | 'Medium' | 'Long';
    requirements: string[];
    questPoints: number;
}

export type Guide = SkillGuide | QuestGuide;