import { React, useState, useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { history } from '../../helpers/history';
import Table from '../../components/tables/table';
import GoBackButton from '../../components/buttons/goBackButton';
import { CompanyService } from '../../services/company.service';

const Company = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const { companyId } = useParams()

  const getCompanyNumbers= () => {
    setLoading(true)
    setData(null)
    CompanyService.getCompanyNumbers(companyId)
      .then((res) => {
        setData(res.data)
        setLoading(false)
      })
      .catch(() => {
        setData([])
        setLoading(false)
      })
  }

  useEffect(() => {
    if(!data){
      getCompanyNumbers()
    }
  })

  const columns = useMemo(
    () => [
      {
        Header: " ",
        columns: [
          {
            Header: "Number",
            accessor: (row) => (
              <a href={`/numbers/${row.id}`} onClick={()=>history.push(`/numbers/${row.id}`)}>
                {row.id}
              </a>
            )
          },
          {
            Header: "Type",
            accessor: 'type'
          }
        ]
      }
    ]
  )

  return(
    <section>
      <GoBackButton />
      <h1>Local Public Office</h1>
      {loading ? <p>Loading...</p> :
        data?.length > 0 ? (
          <Table
            data={data}
            columns={columns}
          />
        ):
          <div> No details available </div>
      }
    </section>
  )
}

export default Company