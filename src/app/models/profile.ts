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
            lessonNo: number,
            items: [
              {
                itemNo: number,
                isFinished: boolean
              }
            ]
          }
        ]
      },
      {
        quizzes: [
          {
            quizNo: number,
            isFinished: boolean
          }
        ]
      }
  ]

}




