export interface Project {
    id: string
    title: string
    description: string
    tags: string[]
    path: string
    created_at: Date
    ended_at: Date | null
}

export interface ProjectPageProps {
    title: string
}