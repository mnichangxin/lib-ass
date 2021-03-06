import React from 'react'
import 'whatwg-fetch'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import styles from './bookshelves.less'

import {Section} from '../section/section.js'

class BookShelves extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            list: [
                {
                    bookId: '9787544253994',
                    bookName: '百年孤独'
                }
            ]
        }
    }

    render() {
        const section_title = '书籍管理'
        const box_title = '书籍上架'
        const box_content = <div className={styles.bookshelves}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>已入库图书ID</th>
                        <th>书籍名</th>
                        <th>编辑信息</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.bookId}</td>
                                    <td>{item.bookName}</td>
                                    <td>
                                        <Link to="" className={styles.edit}>编辑上架</Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>

        return (
            <Section 
                section_title={section_title} 
                box_title={box_title} 
                box_content={box_content} 
            />
        )
    }
}

export {BookShelves}
