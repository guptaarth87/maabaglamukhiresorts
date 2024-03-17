{
    rooms_data.map((item,key)=>{
        return (
        <div class="carousel-item active">
            <img class="d-block w-100" src={item.images} alt="First slide" />
          </div>
        )
    })
}