const posts = [
  {
    id: 1,
    username: "mpencot0",
    text:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    date: "2017-07-26 15:44:08"
  },
  {
    id: 2,
    username: "mpencot0",
    text:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
    date: "2017-08-04 06:17:29"
  },
  {
    id: 3,
    username: "dbrokenbrow2",
    text:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    date: "2017-07-12 10:47:03"
  },
  {
    id: 4,
    username: "myakuntzov3",
    text:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    date: "2017-09-03 16:53:53"
  },
  {
    id: 5,
    username: "slogesdale9",
    text:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    date: "2017-11-05 08:24:16"
  },
  {
    id: 6,
    username: "mpencot0",
    text:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    date: "2017-10-07 10:01:07"
  },
  {
    id: 7,
    username: "ljeffs6",
    text:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    date: "2017-09-24 22:30:55"
  },
  {
    id: 8,
    username: "ngedge7",
    text:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    date: "2017-11-15 13:38:29"
  },
  {
    id: 9,
    username: "ljeffs6",
    text:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    date: "2017-06-11 00:10:04"
  },
  {
    id: 10,
    username: "slogesdale9",
    text:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
    date: "2017-10-09 12:34:55"
  }
];

/* This week we'll be looking at potential operations we may need
        to run on social media post data.

    For today's problem, we'd like to be able to view all the posts
      from a given user, display a collection that includes the number
      of posts the user made and all the post data from that user.

    (e.g ljeffs6 => {
      count: 2,
      posts: [{
        id: 9,
        username: "ljeffs6",
        text:
          "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
        date: "2017-06-11 00:10:04"},
        {
          id: 7,
        username: "ljeffs6",
        text:
          "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
        date: "2017-09-24 22:30:55"
        }]
      }
    )

  Once that's completed, organize the collection by the datetime the
    post was made.
*/

function sortByUser(arr, username) {
  filteredArr = arr.filter(cur => {if(cur.username === username) return cur}).sort((a,b) => Date.parse(a.date) > Date.parse(b.date));
  return filteredArr;
}