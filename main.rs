use std::io;

fn main() {
    println!("Enter a limit to find all primes up to that limit:");
    let mut limit = String::new();
    io::stdin()
        .read_line(&mut limit)
        .expect("Failed to read line");
    let limit: usize = match limit.trim().parse() {
        Ok(num) => num,
        Err(_) => {
            println!("Invalid input, please enter a valid number");
            return;
        }
    };

    let primes = find_primes(limit);
    println!("Prime numbers up to {}:", limit);
    for prime in primes {
        println!("{}", prime);
    }
}

fn find_primes(limit: usize) -> Vec<usize> {
    let mut primes = vec![true; limit + 1];
    primes[0] = false;
    primes[1] = false;
    let mut p = 2;
    while p * p <= limit {
        if primes[p] {
            for i in (p * p..=limit).step_by(p) {
                primes[i] = false;
            }
        }
        p += 1;
    }
    primes
        .iter()
        .enumerate()
        .filter(|(_, &is_prime)| is_prime)
        .map(|(i, _)| i)
        .collect()
}
