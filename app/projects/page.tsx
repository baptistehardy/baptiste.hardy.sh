import { NextPage } from 'next'
import Layout from '@/components/Layout'
import { GitHub } from 'react-feather'
import { ProjectBadge, ProjectImage, ProjectTitle } from '@/components/ProjectDetails'
import Paragraph from '@/components/Paragraph'
import Image from 'next/image'
import Link from 'next/link'

const ProjectsPage: NextPage = () => {
    return (
        <Layout title={'Page'}>
            <div>
                <ProjectTitle projectName={'Page'} years={'2022'} />

                <div>
                    {/*<Image src={'https://picsum.photos/400/200'} alt="Page Image" width={100} height={100}/>*/}
                </div>

                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium cumque eius inventore labore
                    laudantium reiciendis repellat temporibus. Adipisci consectetur ea eveniet, illo iste iusto numquam,
                    quibusdam quisquam reiciendis voluptas voluptate.
                </Paragraph>

                <ul>
                    <li>
                        <ProjectBadge>Stack</ProjectBadge>
                        <span>PHP, C#...</span>
                    </li>
                    <li>
                        <ProjectBadge>Platform</ProjectBadge>
                        <span>Web</span>
                    </li>
                    <li>
                        <ProjectBadge>Website</ProjectBadge>
                        <Link href={'https://google.fr'}>https://google.fr</Link>
                    </li>
                    <li>
                        <ProjectBadge>Repository</ProjectBadge>
                        <Link href={'https://github.com'} target={'_blank'}>
                            <button>GitHub</button>
                        </Link>
                    </li>
                </ul>

                {/*<ProjectImage src={'https://picsum.photos/400/300'} alt={'Pictures'}/>*/}
                {/*<ProjectImage src={'https://picsum.photos/400/300'} alt={'Pictures'}/>*/}
            </div>
        </Layout>
    )
}

export default ProjectsPage
