# Prime Number Finder

This is a simple Rust program that allows the user to find all prime numbers up to a given limit using the Sieve of Eratosthenes algorithm.

## Usage

To use this program, follow these steps:

Install Rust on your system if you haven't already. You can download Rust from the official website at <https://www.rust-lang.org/tools/install>.

Clone this repository to your local machine using Git:

```bash
git clone https://github.com/vaporjawn/prime-number-finder.git
```

Open a terminal window and navigate to the directory where you cloned the repository.

Run the program using the following command:

```arduino
cargo run
```

This will prompt you to enter a limit, and then display all prime numbers up to that limit.

## Implementation

This program uses the Sieve of Eratosthenes algorithm to find all prime numbers up to a given limit. The algorithm works by creating a list of numbers from 0 to the limit, and then eliminating all multiples of each prime number from the list. The resulting list contains only prime numbers.

The implementation of the algorithm in this program uses a Vec<bool> to represent whether each number up to the limit is prime or not. It starts with all numbers marked as prime, except for 0 and 1, which are not considered prime. Then it uses the Sieve of Eratosthenes algorithm to eliminate multiples of each prime number from the list of potential primes. Finally, it filters the list of numbers to only include those that are marked as prime, and returns them as a Vec<usize>.

## Contributing

If you find a bug in this program or would like to suggest an improvement, please feel free to submit an issue or pull request on GitHub. I welcome contributions from the community!
