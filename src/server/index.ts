import mockData from '../../MOCK/MOCK_DATA.json'

interface Product {
  id: string
  name: string
  date: string
  distance: string
  status: boolean
}

interface FetchParams {
  page: number
  pageSize: number
  sortBy?: 'name' | 'status' | 'date'
  sortOrder?: 'asc' | 'desc'
  filters?: {
    name?: string
    status?: boolean
    date?: string
  }
}

interface PaginatedResponse<T> {
  data: T[]
  totalItems: number
  totalPages: number
  currentPage: number
}

export function fetchApi(params: FetchParams): Promise<PaginatedResponse<Product>> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        let allData: Product[] = mockData

        // filtros
        if (params.filters) {
          if (params.filters.name) {
            const nameFilter = params.filters.name.toLowerCase()
            allData = allData.filter((product) =>
              product.name.toLowerCase().includes(nameFilter),
            )
          }
          if (params.filters.status !== undefined) {
            allData = allData.filter(
              (product) => product.status === params?.filters?.status,
            )
          }
          if (params.filters.date) {
            allData = allData.filter(
              (product) => product.date === params?.filters?.date,
            )
          }
        }

        // ordenacao
        if (params.sortBy) {
          allData.sort((a, b) => {
            if (params.sortBy === 'name') {
              return a.name.localeCompare(b.name)
            }
            if (params.sortBy === 'status') {
              return a.status === b.status ? 0 : a.status ? -1 : 1
            }
            if (params.sortBy === 'date') {
              return new Date(a.date).getTime() - new Date(b.date).getTime()
            }
            return 0
          })

          if (params.sortOrder === 'desc') {
            allData.reverse()
          }
        }

        // paginacao
        const startIndex = (params.page - 1) * params.pageSize
        const paginatedData = allData.slice(
          startIndex,
          startIndex + params.pageSize,
        )

        const response: PaginatedResponse<Product> = {
          data: paginatedData,
          totalItems: allData.length,
          totalPages: Math.ceil(allData.length / params.pageSize),
          currentPage: params.page,
        }

        resolve(response)
      } catch (error) {
        reject(new Error('Erro ao carregar os dados'))
      }
    }, 1000)
  })
}
