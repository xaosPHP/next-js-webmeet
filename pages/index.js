import Link from 'next/link'

export default function Home() {
  return (
    <ul>
      <h1>webmeet node</h1>
      <li>
        <Link href="/a" >
          <a>a</a>
        </Link>
      </li>
      <li>
        <Link href="/b" >
          <a>b</a>
        </Link>
      </li>
    </ul>
  )
}
