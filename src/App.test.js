import {render, waitFor} from "@testing-library/react"
import App, {makeNetworkRequest} from "./App"
import nock from "nock"

const mockedWebResponse = JSON.stringify('{"A": "mocked response"}')

function setUpMock() {
    nock(/.*/)
        .persist()
        .defaultReplyHeaders({
            "access-control-allow-origin": "*",
            "access-control-allow-credentials": "true",
        })
        .get(/what-day-is-it/)
        .reply(200, mockedWebResponse)
}

describe("Flushing promises examples", () => {
    it("Only mock network request (no promise flush needed)", async () => {
        setUpMock()
        const result = await makeNetworkRequest()
        expect(result).toEqual(mockedWebResponse)
    })

    it("Test if component renders web response (no promise flush: expected to fail)", () => {
        const component = render(<App />)
        const response = component.container.querySelector(".response")

        expect(response.textContent).toEqual(mockedWebResponse)
    })

    it("Test if component renders web response (fixed promise flush: will pass)", async () => {
        const component = render(<App />)
        const response = component.container.querySelector(".response")

        for (let index = 0; index < 100; index++) {
            await new Promise(setImmediate)
        }
        expect(response.textContent).toEqual(mockedWebResponse)
    })

    it("Test if component renders web response (dynamic promise flush: will pass)", async () => {
        const component = render(<App />)
        const response = component.container.querySelector(".response")

        await waitFor(() =>
            expect(response.textContent).toEqual(mockedWebResponse)
        )
    })
})
