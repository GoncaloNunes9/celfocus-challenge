import React, { useState, useEffect, useMemo } from 'react'
import { history } from '../../helpers/history';
import Table from '../../components/tables/table';
import { CompanyService } from '../../services/company.service';

const Companies = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  const getCompanies= () => {
    setLoading(true)
    setData(null)
    CompanyService.fetch()
      .then((res) => {
        setData(res.data)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
        setData([])
      }
    )
  }

  useEffect(() => {
    if(!data){
      getCompanies()
    }
  }, [data])

  const columns = useMemo(
    () => [
      {
        Header: " ",
        columns: [
          {
            Header: "Company name",
            accessor: (row) => (
              <a href={`/companies/${row.id}`} onClick={()=>history.push(`/companies/${row.id}`)}>
                {row.name}
              </a>
            )
          },
          {
            Header: "vatin",
            accessor: 'vatin'
          }
        ]
      }
    ]
  )

  return(
    <section>
      <h1>Companies</h1>
      {loading ? <p>Loading...</p> :
        data?.length > 0 ? (
          <Table
            data={data}
            columns={columns}
          />
        ):
          <div> No companies available </div>
      }
    </section>
  )
}

export default Companies