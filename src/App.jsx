import React from 'react'
import { gql, useQuery } from '@apollo/client';

const GET_COUNTRY = gql`
  query Query{
    countries{
      name
      phone
      currency
    }
  }
`

const Card = ({ country, phone, currency }) => {
  return (
    <div className='rounded-md shadow-xl w-64 h-68 bg-white m-10'>
      <p className='p-5'>Country : {country} </p>
      <p className='p-5'>Phone : {phone} </p>
      <p className='p-5'>Currency : {currency} </p>
    </div>
  )
}

const App = () => {

  const { data, loading } = useQuery(GET_COUNTRY)

  return (
    <div>
      <div className='flex justify-center m-10'>
        <h1>List of Countries</h1>
      </div>
      <div className='p-10 flex flex-wrap'>
        {
          data && loading === false ? data.countries.map(({ name, phone, currency }) => {
            return (
              <Card
                country={name}
                phone={phone}
                currency={currency}
              />
            )
          }) :
            <div className='flex justify-center'>
              <h1>Please wait ...</h1>
            </div>
        }
      </div>
    </div>
  )
}

export default App