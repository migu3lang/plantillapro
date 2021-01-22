import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol , MDBRow , MDBView, MDBIcon} from 'mdbreact';


function CreateRol() {
    return (
        <div>
            
            <MDBCol>
      <MDBCard>
        
        <MDBCardBody>
          <MDBCardTitle>Crear Rol</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make
            up the bulk of the card&apos;s content.
          </MDBCardText>
          <MDBBtn href="#">MDBBtn</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>


    <MDBCol col='4' style={{ maxWidth: "22rem" }}>
        <MDBCard wide>
          <MDBCardImage
            className='view view-cascade gradient-card-header peach-gradient'
            cascade
            tag='div'
          >
            <h2 className='h2-responsive mb-2'>Title of the news</h2>
            <p>
              <MDBIcon icon='calendar-alt' /> 26.07.2017
            </p>
          </MDBCardImage>
          <MDBCardBody cascade className='text-center'>
            <MDBCardText>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus, ex, recusandae. Facere modi sunt, quod quibusdam
              dignissimos neque rem nihil ratione est placeat vel, natus non
              quos laudantium veritatis sequi.Ut enim ad minima veniam, quis
              nostrum.
            </MDBCardText>
            <a
              href='!#'
              className='orange-text mt-1 d-flex justify-content-end align-items-center'
            >
              <h5 className=''>
                Read more{' '}
                <MDBIcon
                  icon='chevron-right'
                  className='ml-2'
                  size='sm'
                ></MDBIcon>
              </h5>
            </a>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
            
        </div>
    )
}

export default CreateRol
