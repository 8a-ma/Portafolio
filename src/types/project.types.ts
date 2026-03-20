export interface Project {
    id: string
    title: string
    description: string
    tags: string[]
    path: string
}

export interface ProjectPageProps {
    title: string
}