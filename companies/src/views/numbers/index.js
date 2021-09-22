import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CompanyService } from '../../services/companie.service';
import GoBackButton from '../../components/buttons/goBackButton';

const Numbers = () => {
  const [phoneNumber, setPhoneNumber] = useState(null)
  const { numberID } = useParams()

  const getCompanyNumberDetails= () => {
    setPhoneNumber(null)
    CompanyService.getCompanyNumberDetails(numberID)
      .then((res) => setPhoneNumber(res.data))
      .catch(() => setPhoneNumber(null))
  }

  useEffect(() => {
    if (!phoneNumber) {
      getCompanyNumberDetails()
    }
  })

  return(
    <section>
      <GoBackButton />
      {phoneNumber ? (
        <>
          <p>{phoneNumber.id}</p>
          <p>{phoneNumber.type}</p>
        </>
      ):
      <div> No numbers available </div>}
    </section>
  )
}

export default Numbers