const testimonialsContainer = document.querySelector('.testimonials-container');
const testimonial = document.querySelector('.testimonial');
const progressBar = document.querySelector('.progress-bar');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');
const role = document.querySelector('.role');

const testimonials = [
  {
    name: 'Miyah Myles',
    position: 'Marketing',
    photo:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi assumenda deserunt harum culpa similique nesciunt ut atque sequi commodi, repellat ipsum beatae dolores soluta saepe odit. Atque explicabo temporibus molestias."
  },
  {
    name: 'June Cha',
    position: 'Software Engineer',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id mollitia et omnis hic dignissimos aliquid a sequi dolorem incidunt delectus."
    
  },
  {
    name: 'Iida Niskanen',
    position: 'Data Entry',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    text:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam rerum vel, impedit natus praesentium eum dolores aperiam sint corrupti modi eius doloribus esse. Fuga, beatae? Aliquid, explicabo facilis! "
  },
  {
    name: 'Renee Sims',
    position: 'Receptionist',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea odit nemo sapiente, vel nam iure!" 
  },
  {
    name: 'Jonathan Nunfiez',
    position: 'Graphic Designer',
    photo: 'https://randomuser.me/api/portraits/men/43.jpg',
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In molestiae cum reprehenderit quasi aliquid voluptates accusantium! Facilis animi maiores mollitia facere saepe modi omnis dolore maxime aut. Perferendis doloremque modi ex, libero dicta distinctio quas maiores sequi? Sit blanditiis cum nostrum aliquid? Molestiae autem, temporibus fuga ea dolor pariatur dolorum!" 
  },
  {
    name: 'Sasha Ho',
    position: 'Accountant',
    photo:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
    text:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo provident, neque vero, nemo, inventore sunt ipsa magnam aperiam rerum fuga minima eligendi autem corporis suscipit dolore. Amet, praesentium sunt id asperiores ipsam dicta enim reprehenderit suscipit optio quibusdam minima ab!" 
  },
  {
    name: 'Veeti Seppanen',
    position: 'Director',
    photo: 'https://randomuser.me/api/portraits/men/97.jpg',
    text:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, pariatur hic eum accusantium amet voluptas non odit ab tempora aliquam soluta laborum debitis minus."
  },
]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  idx = idx > testimonials.length - 1 ? 0 : idx; 
}
progressBar.addEventListener('animationiteration', () => {
  updateTestimonial()
})
