import React from 'react'
import briyaniImage from '../asserts/briyaniImage.jpg';

export default function Cards(props) {


    
  return (
    <div>
          <div>
                <div className="card mt-3 rounded" style={{ "width": "18rem","maxHeight":"360px"}}>
                    <img className="card-img-top" id="cardImg" src="" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{props.foodName}</h5>
                        
                        <div className="container w-100 flex item-center">
                            <select className='m-2 h-100  bg-success'>
                                {Array.from(Array(6), (e,i)=>{
                                    return (
                                        <option key={i+1} vlaue={i+1}>{i+1}</option>
                                    )
                                })}
                            </select>

                            <select className='m-2 h-100  bg-success'>
                             <option value="half">Half</option>
                             <option value="full">Full</option>
                            </select>

                                <div className='mt-2'>TotalPrice</div>
                        </div>

                    </div>
                </div>
            </div>
    </div>
  )
}
