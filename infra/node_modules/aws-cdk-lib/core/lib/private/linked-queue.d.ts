/**
 * A queue that is faster than an array at large throughput
 */
export declare class LinkedQueue<A> {
    private head?;
    private last?;
    constructor(items?: Iterable<A>);
    push(value: A): void;
    shift(): A | undefined;
}
