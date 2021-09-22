import React, { useState, useEffect, useMemo } from 'react'
import { CompanyService } from '../../services/companie.service';
import { history } from '../../helpers/history';
import Table from '../../components/tables/table';

const Companies = () => {
  const [data, setData] = useState(null)

  const getCompanies= () => {
    setData(null)
    CompanyService.fetch()
      .then((res) => {
        setData(res.data)
      })
      .catch(() => {
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
      {data?.length > 0 ? (
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