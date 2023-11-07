import React from 'react'
import {create} from 'react-test-renderer'
import ProfileStatus from "../MyPosts/ProfileStatus";

describe('ProfileStatus component', () => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status={'it'} updateStatus={() => {
        }}/>)
        const instance = component.getInstance()
        expect(instance?.props.status).toBe('it')
    })

    test('after creating span should be displayed', () => {
        const component = create(<ProfileStatus status={'it'} updateStatus={() => {
        }}/>)
        const root = component.root
        let span = root.findByType('span')
        expect(span.children.length).toBe(1)
    })
})