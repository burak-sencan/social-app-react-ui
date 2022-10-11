import { createSlice } from '@reduxjs/toolkit'

// Getting data from anywhere
const initialState = {
  postsByDate: {
    '2021-06-17': [
      {
        published_at: '2021-06-17 08:40:52',
        is_published: true,
        status: 3,
        entry: {
          type: 'photo',
          message:
            'Lorem ipsum dolor sit amet, consecteturat\r\n adipiscing elit, sed do eiusmod tempor \r\nincididunt? http://bit.ly/145HD7S ',
          image: [
            'https://s3-eu-west-1.amazonaws.com/a6apptest/public/files/58bab486274592018803fa0008413733_0A0szw7OSDIVt2rq80.jpeg',
          ],
          video: null,
        },
        updated_at: '2021-06-17 08:41:13',
        created_at: '2021-06-17 08:40:52',
        link: 'https://www.instagram.com/p/CQNwbu4K7DU/',
        account: {
          name: 'Social Orientation',
          username: 'socialorientation_test',
          image: 'cfe8008ac103ab6686983a449d1a7c3e.jpg',
          link: 'https://www.instagram.com/socialorientation_test',
          channel: 'instagrambusiness',
        },
      },
      {
        published_at: '2021-06-17 08:40:52',
        is_published: true,
        status: 3,
        entry: {
          type: 'photo',
          message:
            'Lorem ipsum dolor sit amet, consecteturat\r\n adipiscing elit, sed do eiusmod tempor \r\nincididunt? http://bit.ly/145HD7S ',
          image: [
            'https://s3-eu-west-1.amazonaws.com/a6apptest/public/files/58bab4018803fa0008413733_0A0szw7OSDIVt2rq80.jpeg',
          ],
        },
        updated_at: '2021-06-17 08:41:15',
        created_at: '2021-06-17 08:40:52',
        link: 'https://twitter.com/smorientation/status/1405445424404746242',
        account: {
          name: 'Social Orientation',
          username: 'smorientation',
          image: '4b20564176a222d0ed94b60c51c69490.jpg',
          link: 'https://twitter.com/smorientation',
          channel: 'twitter',
        },
      },
      {
        published_at: '2021-06-17 08:40:50',
        is_published: true,
        status: 3,
        entry: {
          type: 'photo',
          message:
            'Lorem ipsum dolor sit amet, consecteturat\r\n adipiscing elit, sed do eiusmod tempor \r\nincididunt? http://bit.ly/145HD7S ',
          image: [
            'https://s3-eu-west-1.amazonaws.com/a6apptest/public/files/58bab4018803fa0008413733_0A0szw7OSDIVt2rq80.jpeg',
          ],
        },
        updated_at: '2021-06-17 08:41:01',
        created_at: '2021-06-17 08:40:50',
        link: 'https://www.facebook.com/471462903187593/posts/1436830046650869',
        account: {
          name: 'Social Orientation',
          username: 'socialorientation',
          image: '79d84aa0c62f1b1985f940bca642bfb4.png',
          link: 'https://www.facebook.com/471462903187593',
          channel: 'facebook',
        },
      },
    ],
    '2021-07-01': [
      {
        published_at: '2021-07-01 00:00:00',
        is_published: false,
        status: 1,
        entry: {
          type: 'photo',
          message: 'Lorem ipsum dolor sit amet, consecteturat \r\nadipiscing elit, sed do eiusmod.',
          image: [
            'https://s3-eu-west-1.amazonaws.com/a6apptest/public/files/58bab4018803fa0008413733_oD3qc1vlVTmg8pwWaJ.jpeg',
          ],
        },
        updated_at: '2021-06-17 08:42:18',
        created_at: '2021-06-17 08:42:18',
        account: {
          name: 'Social Orientation',
          username: 'socialorientation',
          image: '79d84aa0c62f1b1985f940bca642bfb4.png',
          link: 'https://www.facebook.com/471462903187593',
          channel: 'facebook',
        },
      },
      {
        published_at: '2021-07-01 00:00:00',
        is_published: false,
        status: 0,
        entry: {
          type: 'photo',
          message: 'Lorem ipsum dolor sit amet, consecteturat \r\nadipiscing elit, sed do eiusmod.',
          image: [
            'https://s3-eu-west-1.amazonaws.com/a6apptest/public/files/58bab4018803fa0008413733_qPJUrz2XxgneyAplXE.jpeg',
          ],
        },
        updated_at: '2021-06-17 08:42:44',
        created_at: '2021-06-17 08:42:44',
        account: {
          name: 'Social Orientation',
          username: 'smorientation',
          image: '4b20564176a222d0ed94b60c51c69490.jpg',
          link: 'https://twitter.com/smorientation',
          channel: 'twitter',
        },
      },
    ],
  },
}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
})

// Action creators are generated for each case reducer function
// export const {  } = postSlice.actions
export default postSlice.reducer
