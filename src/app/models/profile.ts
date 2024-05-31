export interface Profile {
  id: string
	email: string
	password: string
	username: string
	gender: string
	birthday: string
	avatarImagePath: string
  progress?: [
      {
        lessons: [
          {
            lessonNo: 1,
            items: [
              {
                isFinished: boolean;
              }
            ]
          },
          {
            lessonNo: 2,
            items: [
              {
                isFinished: boolean;
              }
            ]
          },
        ]
      },
      {
        quizzes: [
          {
            quizNo: 1,
            items: [
              {
                isFinished: boolean;
              }
            ]
          },
          {
            quizNo: 2,
            items: [
              {
                isFinished: boolean;
              }
            ]
          },
        ]
      }
  ]

}




