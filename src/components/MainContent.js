import * as React from 'react'
import { RichText } from 'prismic-reactjs'

export const MainContent = ({ doc }) => {
  const image_bank = doc?.body[1].items
  return (
    <main className="container">
      {RichText.render(doc?.text_title?.raw)}
      {RichText.render(doc?.detail_banner?.raw)}
      <div>
        เว็บหวยออนไลน์ ทองลอตโต้ (thong lotto) มีการเข้ารหัสข้อมูล 256 บิต ข้อมูลของท่านมีความปลอดภัย 100%
      </div>
      <img
        src={doc?.image_ssl?.fluid?.src}
      />
      <div>
        ฝาก ถอน รวดเร็ว ผ่านระบบอัตโนมัติ ปรับเครดิตภายใน 5 นาที รองรับรายการได้จาก 6 ธนาคาร
      </div>
      <div>
        {image_bank.map(a =>
          <img src={a?.image_banker?.fluid?.src}/>
        )}
      </div>

    </main>

  )
}
