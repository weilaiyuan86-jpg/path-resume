import { create } from 'zustand';

export const useResumeStore = create((set) => ({
  resume: {
    personalInfo: { fullName: '', email: '', location: '', phone: '', linkedin: '' },
    education: [],
    experience: [],
    skills: '',
    jobDescription: '', // 用于 AI 匹配的职位描述
  },
  setPersonalInfo: (info: any) => set((state: any) => ({
    resume: { ...state.resume, personalInfo: info }
  })),
  setJobDescription: (jd: string) => set((state: any) => ({
    resume: { ...state.resume, jobDescription: jd }
  })),
  addEducation: () => set((state: any) => ({
    resume: { ...state.resume, education: [...state.resume.education, { school: '', degree: '', date: '', gpa: '' }] }
  })),
  updateEducation: (index: number, field: string, value: string) => set((state: any) => {
    const newEdu = [...state.resume.education];
    newEdu[index] = { ...newEdu[index], [field]: value };
    return { resume: { ...state.resume, education: newEdu } };
  }),
  addExperience: () => set((state: any) => ({
    resume: { ...state.resume, experience: [...state.resume.experience, { company: '', role: '', description: '' }] }
  })),
  updateExperience: (index: number, field: string, value: string) => set((state: any) => {
    const newExp = [...state.resume.experience];
    newExp[index] = { ...newExp[index], [field]: value };
    return { resume: { ...state.resume, experience: newExp } };
  }),
}));