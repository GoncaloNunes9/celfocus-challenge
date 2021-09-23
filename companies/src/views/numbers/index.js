import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CompanyService } from '../../services/company.service';
import GoBackButton from '../../components/buttons/goBackButton';

const Numbers = () => {
  const [phoneNumber, setPhoneNumber] = useState(null)
  const [loading, setLoading] = useState(false)
  const { numberID } = useParams()

  const getCompanyNumberDetails= () => {
    setLoading(true)
    setPhoneNumber(null)
    CompanyService.getCompanyNumberDetails(numberID)
      .then((res) => {
        setPhoneNumber(res.data)
        setLoading(false)
      })
      .catch(() => {
        setPhoneNumber(null)
        setLoading(false)
      })
  }

  useEffect(() => {
    if (!phoneNumber) {
      getCompanyNumberDetails()
    }
  })

  return(
    <section>
      <GoBackButton />
      {loading ? <p>Loading...</p> :
        phoneNumber ? (
          <>
            <p>{phoneNumber.id}</p>
            <p>{phoneNumber.type}</p>
          </>
        ):
        <div> No numbers available </div>
      }
    </section>
  )
}

export default Numbers