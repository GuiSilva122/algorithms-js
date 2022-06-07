class FlippingBits {
  flippingBits(n: number) : number { 
    return ((n ^ (Math.pow(2, 32) - 1)) >>> 0);
  }
}

export { FlippingBits };