import { React, useState, useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { CompanyService } from '../../services/companie.service';
import { history } from '../../helpers/history';
import Table from '../../components/tables/table';
import GoBackButton from '../../components/buttons/goBackButton';

const Company = () => {
  const [data, setData] = useState(null)
  const { companyId } = useParams()

  const getCompanyNumbers= () => {
    setData(null)
    CompanyService.getCompanyNumbers(companyId)
      .then((res) => {
        setData(res.data)
      })
      .catch(() => {
        setData([])
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
      {data?.length > 0 ? (
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