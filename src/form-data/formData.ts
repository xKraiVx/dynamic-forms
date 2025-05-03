import { EActionType, IQuiz } from "@/common/types/question.types";
import { v4 as uuidv4 } from "uuid";

export const formData: IQuiz = {
  id: "1c2b183b-7e57-49d5-8a2d-6b16c7c5b7fd",
  initialQuestionId: "c3d59d45-a718-4e92-9f98-6adbd6d0cfae",
  name: "Introduction Quiz",
  questions: [
    {
      id: "c3d59d45-a718-4e92-9f98-6adbd6d0cfae",
      text: "Select your gender:",
      options: [
        {
          id: uuidv4(),
          label: "Female",
          value: "female",
          action: {
            type: EActionType.REDIRECT,
            questionId: "1c2b183b-7e57-49d5-8a2d-6b16c7c5b7fd",
          },
        },
        {
          id: uuidv4(),

          label: "Male",
          value: "male",
          action: {
            type: EActionType.REDIRECT,
            questionId: "1c2b183b-7e57-49d5-8a2d-6b16c7c5b7fd",
          },
        },
      ],
      style: {
        mode: "light",
        textAlign: "center",
      },
    },
    {
      id: "1c2b183b-7e57-49d5-8a2d-6b16c7c5b7fd",
      text: "So we can get to know you better, tell us about your relationship status.",
      options: [
        {
          id: uuidv4(),

          label: "Single",
          value: "single",
          action: {
            type: EActionType.REDIRECT,
            questionId: "70a7b3cb-4a7f-4b78-bc77-6469484ea270",
          },
        },
        {
          id: uuidv4(),

          label: "In a relationship",
          value: "in_relationship",
          action: {
            type: EActionType.REDIRECT,
            questionId: "6a76d60d-d318-45bc-9e08-77a9a05c9f3e",
          },
        },
      ],
      style: {
        mode: "light",
        textAlign: "center",
      },
    },
    {
      id: "70a7b3cb-4a7f-4b78-bc77-6469484ea270",
      text: "Are you a single parent?",
      options: [
        {
          id: uuidv4(),

          label: "Yes",
          value: "yes",
          action: {
            type: EActionType.REDIRECT,
            questionId: "36df30b3-bf35-4f00-9c68-2a89bb9b91aa",
          },
        },
        {
          id: uuidv4(),

          label: "No",
          value: "no",
          action: {
            type: EActionType.REDIRECT,
            questionId: "36df30b3-bf35-4f00-9c68-2a89bb9b91aa",
          },
        },
      ],
      style: {
        mode: "light",
        textAlign: "center",
      },
    },
    {
      id: "6a76d60d-d318-45bc-9e08-77a9a05c9f3e",
      text: "Are you a parent?",
      options: [
        {
          id: uuidv4(),

          label: "Yes",
          value: "yes",
          action: {
            type: EActionType.REDIRECT,
            questionId: "d8e67f7b-b801-4cb3-9151-55997aaeb7d6",
          },
        },
        {
          id: uuidv4(),

          label: "No",
          value: "no",
          action: {
            type: EActionType.REDIRECT,
            questionId: "d8e67f7b-b801-4cb3-9151-55997aaeb7d6",
          },
        },
      ],
      style: {
        mode: "light",
        textAlign: "center",
      },
    },
    {
      id: "36df30b3-bf35-4f00-9c68-2a89bb9b91aa",
      text: "Single {%c3d59d45-a718-4e92-9f98-6adbd6d0cfae%} {%70a7b3cb-4a7f-4b78-bc77-6469484ea270:yes:who have children%} need a slightly different approach to improve their relationship. Which statement best describes you?",
      options: [
        {
          id: uuidv4(),

          label:
            "I'm very unhappy with how things are going in my relationship",
          value: "very_unhappy",
          action: {
            type: EActionType.REDIRECT,
            questionId: "8e81c471-38a7-4bc3-8f1e-9cfb13b14ae3",
          },
        },
        {
          id: uuidv4(),

          label:
            "I'm unhappy with parts of my relationship, but some things are working well",
          value: "some_issues",
          action: {
            type: EActionType.REDIRECT,
            questionId: "8e81c471-38a7-4bc3-8f1e-9cfb13b14ae3",
          },
        },
        {
          id: uuidv4(),

          label: "I'm generally happy in my relationship",
          value: "happy",
          action: {
            type: EActionType.REDIRECT,
            questionId: "8e81c471-38a7-4bc3-8f1e-9cfb13b14ae3",
          },
        },
      ],
      style: {
        mode: "light",
        textAlign: "center",
      },
    },
    {
      id: "8e81c471-38a7-4bc3-8f1e-9cfb13b14ae3",
      text: "Do you tend to overthink?",
      options: [
        {
          id: uuidv4(),

          label: "Yes",
          value: "yes",
          action: {
            type: EActionType.REDIRECT,
            questionId: "914b2e1f-b1aa-4ad7-bdc4-df3f41f5e4e6",
          },
        },
        {
          id: uuidv4(),

          label: "No",
          value: "no",
          action: {
            type: EActionType.REDIRECT,
            questionId: "914b2e1f-b1aa-4ad7-bdc4-df3f41f5e4e6",
          },
        },
      ],
      style: {
        mode: "light",
        textAlign: "center",
      },
    },
    {
      id: "914b2e1f-b1aa-4ad7-bdc4-df3f41f5e4e6",
      text: "So how does it work?",
      description:
        "We analyze hundreds of data points to create your unique astrological blueprint. This is combined with AI to tailor-make your astrological insights, based on your answers. We’re going to change your relationship with astrology.",
      options: [
        {
          id: uuidv4(),
          label: "Next",
          value: "next",
          action: {
            type: EActionType.CONDITION,
            conditions: [
              {
                questionId: "8e81c471-38a7-4bc3-8f1e-9cfb13b14ae3",
                value: "yes",
                redirect: "ac38a260-f9d0-48a2-a407-79ac5ee86136",
              },
              {
                questionId: "8e81c471-38a7-4bc3-8f1e-9cfb13b14ae3",
                value: "no",
                redirect: "3d8d6712-6ff4-4f63-99f6-4b80c01a7c0a",
              },
            ],
          },
        },
      ],
      style: {
        mode: "dark",
        textAlign: "center",
      },
    },
    {
      id: "ac38a260-f9d0-48a2-a407-79ac5ee86136",
      text: "What is most important to you?",
      options: [
        {
          id: uuidv4(),
          label: "Success",
          value: "success",
          action: {
            type: EActionType.REDIRECT,
            questionId: "f932fe1f-cdb3-4d08-8f3f-f9377e491877",
          },
        },
        {
          id: uuidv4(),

          label: "Pleasure",
          value: "pleasure",
          action: {
            type: EActionType.REDIRECT,
            questionId: "f932fe1f-cdb3-4d08-8f3f-f9377e491877",
          },
        },
        {
          id: uuidv4(),

          label: "Safety",
          value: "safety",
          action: {
            type: EActionType.REDIRECT,
            questionId: "f932fe1f-cdb3-4d08-8f3f-f9377e491877",
          },
        },
        {
          id: uuidv4(),

          label: "Freedom",
          value: "freedom",
          action: {
            type: EActionType.REDIRECT,
            questionId: "f932fe1f-cdb3-4d08-8f3f-f9377e491877",
          },
        },
      ],
      style: {
        mode: "light",
        textAlign: "center",
      },
    },
    {
      id: "3d8d6712-6ff4-4f63-99f6-4b80c01a7c0a",
      text: "Is emotional control tricky for you?",
      options: [
        {
          id: uuidv4(),

          label: "Yes",
          value: "yes",
          action: {
            type: EActionType.REDIRECT,
            questionId: "f932fe1f-cdb3-4d08-8f3f-f9377e491877",
          },
        },
        {
          id: uuidv4(),

          label: "Sometimes",
          value: "sometimes",
          action: {
            type: EActionType.REDIRECT,
            questionId: "f932fe1f-cdb3-4d08-8f3f-f9377e491877",
          },
        },
        {
          id: uuidv4(),

          label: "Rarely",
          value: "rarely",
          action: {
            type: EActionType.REDIRECT,
            questionId: "f932fe1f-cdb3-4d08-8f3f-f9377e491877",
          },
        },
        {
          id: uuidv4(),

          label: "Not at all",
          value: "not_at_all",
          action: {
            type: EActionType.REDIRECT,
            questionId: "f932fe1f-cdb3-4d08-8f3f-f9377e491877",
          },
        },
      ],
      style: {
        mode: "light",
        textAlign: "center",
      },
    },
    {
      id: "d8e67f7b-b801-4cb3-9151-55997aaeb7d6",
      text: "{%c3d59d45-a718-4e92-9f98-6adbd6d0cfae%} {%6a76d60d-d318-45bc-9e08-77a9a05c9f3e:yes:who have children%} need a slightly different approach to find their perfect partner. But first, how did you feel in your last relationship?",
      options: [
        {
          id: uuidv4(),

          label: "I was unhappy with how things were going in my relationship",
          value: "very_unhappy",
          action: {
            type: EActionType.REDIRECT,
            questionId: "e4c17912-13b5-43cb-90e1-6b0a2f4c2e91",
          },
        },
        {
          id: uuidv4(),

          label:
            "I was unhappy with parts of my relationship, but some things were working",
          value: "some_issues",
          action: {
            type: EActionType.REDIRECT,
            questionId: "e4c17912-13b5-43cb-90e1-6b0a2f4c2e91",
          },
        },
        {
          id: uuidv4(),

          label: "I was generally happy with my relationship",
          value: "happy",
          action: {
            type: EActionType.REDIRECT,
            questionId: "e4c17912-13b5-43cb-90e1-6b0a2f4c2e91",
          },
        },
        {
          id: uuidv4(),

          label: "I’ve never been in a relationship",
          value: "never_been",
          action: {
            type: EActionType.REDIRECT,
            questionId: "e4c17912-13b5-43cb-90e1-6b0a2f4c2e91",
          },
        },
      ],
      style: {
        mode: "light",
        textAlign: "center",
      },
    },
    {
      id: "e4c17912-13b5-43cb-90e1-6b0a2f4c2e91",
      text: "Is your partner an introvert or extrovert?",
      options: [
        {
          id: uuidv4(),

          label: "Introvert",
          value: "introvert",
          action: {
            type: EActionType.REDIRECT,
            questionId: "5e7c4d13-d7c4-4321-b0dc-58b9182e3f92",
          },
        },
        {
          id: uuidv4(),

          label: "Extrovert",
          value: "extrovert",
          action: {
            type: EActionType.REDIRECT,
            questionId: "5e7c4d13-d7c4-4321-b0dc-58b9182e3f92",
          },
        },
        {
          id: uuidv4(),

          label: "A bit of both",
          value: "both",
          action: {
            type: EActionType.REDIRECT,
            questionId: "5e7c4d13-d7c4-4321-b0dc-58b9182e3f92",
          },
        },
      ],
      style: {
        mode: "light",
        textAlign: "center",
      },
    },
    {
      id: "5e7c4d13-d7c4-4321-b0dc-58b9182e3f92",
      text: "What is your partner’s gender?",
      options: [
        {
          id: uuidv4(),

          label: "Male",
          value: "male",
          action: {
            type: EActionType.REDIRECT,
            questionId: "84f75eb6-ff57-44b7-a648-d8618d0e9834",
          },
        },
        {
          id: uuidv4(),

          label: "Female",
          value: "female",
          action: {
            type: EActionType.REDIRECT,
            questionId: "84f75eb6-ff57-44b7-a648-d8618d0e9834",
          },
        },
      ],
      style: {
        mode: "light",
        textAlign: "center",
      },
    },
    {
      id: "84f75eb6-ff57-44b7-a648-d8618d0e9834",
      text: "Do you agree with the statement below?",
      description: "“My partner and I make sex a priority in our relationship”",
      options: [
        {
          id: uuidv4(),

          label: "Strongly agree",
          value: "strongly_agree",
          action: {
            type: EActionType.REDIRECT,
            questionId: "b26f36d4-c9a1-4a65-9c37-d65fa0a5cd2b",
          },
        },
        {
          id: uuidv4(),

          label: "Agree",
          value: "agree",
          action: {
            type: EActionType.REDIRECT,
            questionId: "b26f36d4-c9a1-4a65-9c37-d65fa0a5cd2b",
          },
        },
        {
          id: uuidv4(),

          label: "Neutral",
          value: "neutral",
          action: {
            type: EActionType.REDIRECT,
            questionId: "b26f36d4-c9a1-4a65-9c37-d65fa0a5cd2b",
          },
        },
        {
          id: uuidv4(),

          label: "Disagree",
          value: "disagree",
          action: {
            type: EActionType.REDIRECT,
            questionId: "b26f36d4-c9a1-4a65-9c37-d65fa0a5cd2b",
          },
        },
        {
          id: uuidv4(),

          label: "Strongly disagree",
          value: "strongly_disagree",
          action: {
            type: EActionType.REDIRECT,
            questionId: "b26f36d4-c9a1-4a65-9c37-d65fa0a5cd2b",
          },
        },
      ],
      style: {
        mode: "light",
        textAlign: "center",
      },
    },
    {
      id: "b26f36d4-c9a1-4a65-9c37-d65fa0a5cd2b",
      text: "When you think about your relationship goals, you feel...?",
      options: [
        {
          id: uuidv4(),

          label: "Optimistic! They are totally doable, with some guidance.",
          value: "optimistic",
          action: {
            type: EActionType.REDIRECT,
            questionId: "f932fe1f-cdb3-4d08-8f3f-f9377e491877",
          },
        },
        {
          id: uuidv4(),

          label: "Cautious. I’ve struggled before, but I’m hopeful.",
          value: "cautious",
          action: {
            type: EActionType.REDIRECT,
            questionId: "f932fe1f-cdb3-4d08-8f3f-f9377e491877",
          },
        },
        {
          id: uuidv4(),

          label: "I’m feeling a little anxious, honestly.",
          value: "anxious",
          action: {
            type: EActionType.REDIRECT,
            questionId: "f932fe1f-cdb3-4d08-8f3f-f9377e491877",
          },
        },
      ],
      style: {
        mode: "light",
        textAlign: "center",
      },
    },
    {
      id: "f932fe1f-cdb3-4d08-8f3f-f9377e491877",
      text: "Where did you hear about us?",
      options: [
        {
          id: uuidv4(),

          label: "Poster or Billboard",
          value: "poster",
          action: {
            type: EActionType.SUBMIT,
          },
        },
        {
          id: uuidv4(),

          label: "Friend or family",
          value: "friend_family",
          action: {
            type: EActionType.SUBMIT,
          },
        },
        {
          id: uuidv4(),

          label: "Instagram",
          value: "instagram",
          action: {
            type: EActionType.SUBMIT,
          },
        },
        {
          id: uuidv4(),

          label: "Direct Mail or Package Insert",
          value: "direct_link",
          action: {
            type: EActionType.SUBMIT,
          },
        },
        {
          id: uuidv4(),

          label: "Online TV or Streaming TV",
          value: "online_tv",
          action: {
            type: EActionType.SUBMIT,
          },
        },
        {
          id: uuidv4(),

          label: "TV",
          value: "tv",
          action: {
            type: EActionType.SUBMIT,
          },
        },
        {
          id: uuidv4(),

          label: "Radio",
          value: "radio",
          action: {
            type: EActionType.SUBMIT,
          },
        },
        {
          id: uuidv4(),

          label: "Search Engine (Google, Bing, etc.)",
          value: "search_engine",
          action: {
            type: EActionType.SUBMIT,
          },
        },
        {
          id: uuidv4(),

          label: "Newspaper or Magazine",
          value: "print",
          action: {
            type: EActionType.SUBMIT,
          },
        },
        {
          id: uuidv4(),

          label: "Facebook",
          value: "facebook",
          action: {
            type: EActionType.SUBMIT,
          },
        },
        {
          id: uuidv4(),

          label: "Blog Post or Website Review",
          value: "blog",
          action: {
            type: EActionType.SUBMIT,
          },
        },
        {
          id: uuidv4(),

          label: "Podcast",
          value: "podcast",
          action: {
            type: EActionType.SUBMIT,
          },
        },
        {
          id: uuidv4(),

          label: "Influencer",
          value: "influencer",
          action: {
            type: EActionType.SUBMIT,
          },
        },
        {
          id: uuidv4(),

          label: "YouTube",
          value: "youtube",
          action: {
            type: EActionType.SUBMIT,
          },
        },
        {
          id: uuidv4(),

          label: "Pinterest",
          value: "pinterest",
          action: {
            type: EActionType.SUBMIT,
          },
        },
        {
          id: uuidv4(),

          label: "Other",
          value: "other",
          action: {
            type: EActionType.SUBMIT,
          },
        },
      ],
      style: {
        mode: "light",
        textAlign: "center",
      },
    },
  ],
};
