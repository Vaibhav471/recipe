import React from 'react'

function Home() {
  var obj=JSON.parse(localStorage.getItem('obj'))
  var r=obj.recipeArr
          console.log("result is this ",r)
  return (
    <div >
        <h1 className='font-black text-5xl'>{r.label}</h1>
        <div className='inline-flex mt-12'>
          <img src={r.image} className='rounded-lg'/>
         
        <p className='ml-6 mt-6'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate suscipit veritatis est eum, perferendis vero voluptas iusto necessitatibus similique minus distinctio quam animi totam porro enim sint earum maxime tenetur!          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate suscipit veritatis est eum, perferendis vero voluptas iusto necessitatibus similique minus distinctio quam animi totam porro enim sint earum maxime tenetur!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate suscipit veritatis est eum, perferendis vero voluptas iusto necessitatibus similique minus distinctio quam animi totam porro enim sint earum maxime tenetur!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate suscipit veritatis est eum, perferendis vero voluptas iusto necessitatibus similique minus distinctio quam animi totam porro enim sint earum maxime tenetur!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate suscipit veritatis est eum, perferendis vero voluptas iusto necessitatibus similique minus distinctio quam animi totam porro enim sint earum maxime tenetur!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate suscipit veritatis est eum, perferendis vero voluptas iusto necessitatibus similique minus distinctio quam animi totam porro enim sint earum maxime tenetur!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate suscipit veritatis est eum, perferendis vero voluptas iusto necessitatibus similique minus distinctio quam animi totam porro enim sint earum maxime tenetur!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate suscipit veritatis est eum, perferendis vero voluptas iusto necessitatibus similique minus distinctio quam animi totam porro enim sint earum maxime tenetur!
          </p>
        </div>
    </div>
  )
}

export default Home